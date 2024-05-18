import type { StateCreator } from "zustand";
import type { ProjectSlice } from "./project";

export type FileKind = "kaboom" | "main" | "scene";

export type File = {
    name: string;
    language: string;
    value: string;
    kind: FileKind;
    isEncoded: boolean;
    isCurrent: boolean;
};

export interface FilesSlice {
    /** Add a file */
    addFile: (file: File) => void;
    /** Remove a file */
    removeFile: (name: string) => void;
    /** Update a file */
    updateFile: (name: string, value: string) => void;
    /** Get current file */
    getCurrentFile: () => File | null;
    /** Get the main (kaboom) file */
    getKaboomFile: () => File | null;
    /** Get the main file */
    getMainFile: () => File | null;
    /** Set the current file */
    setCurrentFile: (name: string) => void;
}

export const createFilesSlice: StateCreator<
    FilesSlice & ProjectSlice,
    [],
    [],
    FilesSlice
> = (set, get) => ({
    addFile(file) {
        const foundFile = get().project.files.find((f) => f.name === file.name);

        if (foundFile) {
            set((state) => ({
                project: {
                    ...state.project,
                    files: state.project.files.map((oldFile) =>
                        oldFile.name === file.name ? { ...file } : oldFile
                    ),
                },
            }));
        } else {
            set((state) => ({
                project: {
                    ...state.project,
                    files: [...state.project.files, file],
                },
            }));
        }
    },

    removeFile(name) {
        set((state) => ({
            project: {
                ...state.project,
                files: state.project.files.filter((file) => file.name !== name),
            },
        }));
    },

    updateFile(name, value) {
        const file = get().project.files.find((file) => file.name === name);

        if (file) {
            set((state) => ({
                project: {
                    ...state.project,
                    files: state.project.files.map((file) =>
                        file.name === name ? { ...file, value } : file
                    ),
                },
            }));
        }
    },

    getCurrentFile() {
        return get().project.files.find((file) => file.isCurrent) ?? null;
    },

    getKaboomFile() {
        return get().project.files.find((file) => file.kind === "kaboom")
            ?? null;
    },

    getMainFile() {
        return get().project.files.find((file) => file.kind === "main")
            ?? null;
    },

    setCurrentFile(name) {
        set((state) => ({
            project: {
                ...state.project,
                files: state.project.files.map((file) => ({
                    ...file,
                    isCurrent: file.name === name,
                })),
            },
        }));
    },
});