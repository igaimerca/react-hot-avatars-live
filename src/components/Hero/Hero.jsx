import React, { useEffect, useState } from "react";
import Avatar from "react-hot-avatars";
import ReactTypingEffect from "react-typing-effect";

const AutoType = ({ changeName }) => {
    const [newVal, setNewVal] = useState("");
    useEffect(() => {
        changeName(newVal);
    }, [newVal]);
    return (
        <ReactTypingEffect
            speed={700}
            typingDelay={0}
            eraseDelay={10}
            eraseSpeed={600}
            text={["john", "Aime", "Leila", "john@gmail.com"]}
            displayTextRenderer={(text, i) => {
                setNewVal(text);
                return (
                    <input
                        key={i}
                        type="text"
                        value={text}
                        placeholder="Type your names or email here..."
                        className="input input-bordered w-full max-w-xs text-md"
                    />
                );
            }}
        />
    );
};

function Hero() {
    const [value, setValue] = useState("");
    const [size, setSize] = useState(300);
    const [rounded, setRounded] = useState(false);
    const [startedTyping, setStartedTyping] = useState(false);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return (
        <div className="hero mb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Avatar name={value} size={size} rounded={rounded} />
                <div className="mr-7">
                    <h1 className="text-5xl font-bold">The Best Avatars In Town!</h1>
                    <p className="py-6">
                        Lightweight, customizable and beautiful by default.
                    </p>
                    <div className="w-10/12">
                        <div className="flex">
                            <div onClick={() => setStartedTyping(true)} className="flex">
                                {startedTyping ? (
                                    <input
                                         type="text"
                                        placeholder="Type your names or email here..."
                                        className="input input-bordered w-full max-w-xs text-md"
                                        onChange={handleChange}
                                        maxLength="40"
                                    />
                                ) : (
                                    <AutoType changeName={(val) => setValue(val)} />
                                )}
                            </div>
                            <button className="btn btn-primary ml-4" onClick={handleChange}>
                                Generate avatar
                            </button>
                        </div>
                        <div
                            className="tooltip tooltip-bottom w-full my-8 mt-10"
                            data-tip="Slide to change size 😉"
                        >
                            <input
                                type="range"
                                min="0"
                                max="300"
                                value={size}
                                onChange={(e) => setSize(e.target.value)}
                                data-tip=""
                                className="range range-primary"
                            />
                        </div>

                        <div className="form-control w-[25%]">
                            <label className="label cursor-pointer">
                                <span className="label-text">Rounded</span>
                                <input
                                    type="checkbox"
                                    className="toggle toggle-primary"
                                    checked={rounded}
                                    onChange={() => setRounded(!rounded)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="mockup-code my-3">
                        <pre data-prefix=">" className="text-warning">
                            <code>{`<Avatar name="${value}" size="${size}" rounded="${rounded}"/>`}</code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
