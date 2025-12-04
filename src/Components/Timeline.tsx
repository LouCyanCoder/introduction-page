import React from "react";

interface Block {
    title?: string;
    text?: string;
    year?: string;
    image?: string;
    classes?: string;
}

interface Section {
    blocks: Block[];
}

interface TimelineData {
    yearAligning?: string;
    sections: Section[];
}

interface TimelineProps {
    data: TimelineData;
}

const Timeline: React.FC<TimelineProps> = ({ data }) => {
    const yearAligning =
        data.yearAligning && data.yearAligning !== ""
            ? ` timeline--year-${data.yearAligning}`
            : "";

    return (
        <div className={`timeline${yearAligning}`}>
            {data.sections.map((section, sectionIdx) => (
                <div className="timeline__item" key={sectionIdx}>
                    <div className="timeline__grid timeline__grid--center"></div>
                    {section.blocks.map((block, blockIdx) => {
                        const { title, text, year, image } = block;
                        const position =
                            blockIdx === 0 ? "first" : blockIdx === 1 ? "last" : null;
                        const onlyOne = section.blocks.length < 2;

                        return (
                            <React.Fragment key={blockIdx}>
                                <div
                                    className={`timeline__grid timeline__grid--${position}${
                                        year ? " timeline__grid--with-year" : ""
                                    }${image ? " timeline__grid--image" : ""}`}
                                >
                                    {year && <div className="timeline__item-year">{year}</div>}
                                    {(title || text) && (
                                        <div className="timeline__content">
                                            {title && <h3 className="timeline__item-title">{title}</h3>}
                                            {text && <p className="timeline__item-text">{text}</p>}
                                        </div>
                                    )}
                                    {image && (
                                        <div
                                            className="timeline__image"
                                            style={{ backgroundImage: `url(${image})` }}
                                        ></div>
                                    )}
                                </div>
                                {onlyOne && (
                                    <div className="timeline__grid timeline__grid--last"></div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default Timeline;