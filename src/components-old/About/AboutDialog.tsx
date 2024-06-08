import kaplaygroundLogo from "@/assets/logo/kaplayground-o.webp";
import { CHANGELOG, REPO, VERSION } from "@/config/common";

const AboutDialog = () => {
    return (
        <dialog id="my_modal_1" className="modal">
            <section className="modal-box">
                <header className="flex items-center justify-center">
                    <img
                        alt="KAPLAY"
                        src={kaplaygroundLogo.src}
                        className="h-32 object-scale-down"
                    >
                    </img>
                </header>

                <main>
                    <p className="py-4">
                        KAPLAY is the web editor designed for creating KAPLAY
                        games.
                    </p>

                    <p>
                        <span className="font-medium">Version:</span> {VERSION}
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={"https://kaplayjs.com"}
                            target="_blank"
                        >
                            KAPLAY Docs
                        </a>
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={CHANGELOG}
                            target="_blank"
                        >
                            Changelog
                        </a>
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={REPO}
                            target="_blank"
                        >
                            Give a star
                        </a>
                        <br />
                        <a
                            className="font-medium link link-primary"
                            href={REPO + "/issues"}
                            target="_blank"
                        >
                            Report an issue
                        </a>
                    </p>
                </main>

                <footer>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">
                                Continue making!
                            </button>
                        </form>
                    </div>
                </footer>
            </section>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default AboutDialog;