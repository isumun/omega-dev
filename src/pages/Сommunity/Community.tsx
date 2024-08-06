import { useEffect } from "react";
import "../Сommunity/Community.css";
import { RiLoaderFill } from "react-icons/ri";
import useFetch from "../../hooks/useFetch";
import { Job } from "../../hooks/types";
import { FaGithubAlt, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { BiLogoEdge } from "react-icons/bi";
import { FaSquareFacebook } from "react-icons/fa6";
import Header from "../../Companent/Header/Header";
import Footer from "../../Companent/Footer/Footer";

function Communitycomponent() {
    const { data, isLoading } = useFetch({
        url: "http://3.38.98.134/community",
    });

    useEffect(() => {
        if (Array.isArray(data) && data.length > 0) {
            console.log(data);
        }
    }, [data]);

    if (isLoading) {
        return (
            <div>
                <RiLoaderFill />
            </div>
        );
    }

    if (!data || !Array.isArray(data)) {
        return <div>Маалыматтар алынган жок же структура туура эмес</div>;
    }
    console.log(data);

    return (
        <>
        <Header />
        <div className="Communitycomponent">
            <div className="container">
                {data.map((job: Job, index: number) => (
                    <div className="content">
                        <div className="content__resources">
                            <div className="content__resources_resources_reources">
                                <h4>Наши ресурсы в Telegram</h4>
                                <section className="devkg__block">
                                    {Array.isArray(job.devkg) &&
                                        job.devkg.map((chat, idx) => (
                                            <div
                                                key={idx}
                                                className="devkg-block"
                                            >
                                                <img
                                                    src="https://yt3.googleusercontent.com/ANGnp5haaIF0osQ364o2QZ8vbMdsyWDkvlAcXkkvJXy2UpmauPnWFfLd1w0mEcaXncJpR7_j=s160-c-k-c0x00ffffff-no-rj"
                                                    alt=""
                                                />
                                                <a
                                                    href={chat.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="chat-label">
                                                        <p>{chat.label}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                </section>
                                <h4>Телеграм чаты</h4>
                                <section className="telegram__chats__block">
                                    {Array.isArray(job.devkg) &&
                                        job.telegram_chats.map((chat, idx) => (
                                            <div
                                                key={idx}
                                                className="telgram-chats-block"
                                            >
                                                <span>
                                                    <FaTelegramPlane />
                                                </span>
                                                <a
                                                    href={chat.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="chat-label">
                                                        <p>{chat.label}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                </section>
                                <h4>Телеграм каналы</h4>
                                <section className="telegram__chanels__block">
                                    {Array.isArray(job.devkg) &&
                                        job.telegram_channels.map(
                                            (chat, idx) => (
                                                <div
                                                    key={idx}
                                                    className="telgram-channels-block"
                                                >
                                                    <span>
                                                        <FaTelegramPlane />
                                                    </span>
                                                    <a
                                                        href={chat.value}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <div className="chat-label">
                                                            <p>{chat.label}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        )}
                                </section>
                                <h4>Веб-сайты</h4>
                                <section className="website__block">
                                    {Array.isArray(job.devkg) &&
                                        job.websites.map((chat, idx) => (
                                            <div
                                                key={idx}
                                                className="website-block "
                                            >
                                                <span>
                                                    <BiLogoEdge />
                                                </span>
                                                <a
                                                    href={chat.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="chat-label">
                                                        <p>{chat.label}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                </section>
                                <h4>Facebook</h4>
                                <section className="facebook__block">
                                    {Array.isArray(job.devkg) &&
                                        job.facebook.map((chat, idx) => (
                                            <div
                                                key={idx}
                                                className="facebook-block    "
                                            >
                                                <span>
                                                    <FaSquareFacebook />
                                                </span>
                                                <a
                                                    href={chat.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="chat-label">
                                                        <p>{chat.label}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                </section>
                                <h4>YouTube</h4>
                                <section className="youtube__block">
                                    {Array.isArray(job.devkg) &&
                                        job.youtube.map((chat, idx) => (
                                            <div
                                                key={idx}
                                                className="youTube-block "
                                            >
                                                <span>
                                                    <FaYoutube />
                                                </span>
                                                <a
                                                    href={chat.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="chat-label">
                                                        <p>{chat.label}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                </section>
                                <h4>GitHub</h4>
                                <section className="github__block">
                                    {Array.isArray(job.devkg) &&
                                        job.github.map((chat, idx) => (
                                            <div
                                                key={idx}
                                                className="gitHub-block"
                                            >
                                                <span>
                                                    <FaGithubAlt />
                                                </span>
                                                <a
                                                    href={chat.value}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="chat-label">
                                                        <p>{chat.label}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                </section>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />  
        </>
    );
}

export default Communitycomponent;
