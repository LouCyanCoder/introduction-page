// {% from "@@macros.twig" import toNbsp %}

// {% set yearAligning = data.yearAligning is defined and data.yearAligning is not empty ? ' timeline--year-' ~ data.yearAligning : null %}

// <div class="timeline{{ yearAligning }}">

// 	{% for section in data.sections %}

// 		<div class="timeline__item">

// 			<div class="timeline__grid timeline__grid--center"></div>

// 			{% for block in section.blocks %}

// 				{% set title = block.title is defined and block.title is not empty ? block.title : null %}
// 				{% set text = block.text is defined and block.text is not empty ? block.text : null %}
// 				{% set year = block.year is defined and block.year is not empty ? block.year : null %}
// 				{% set position = loop.index == 1 ? 'first' : loop.index == 2 ? 'last' : null %}
// 				{% set image = block.image is defined and block.image is not empty ? block.image : null %}
// 				{% set onlyOne = section.blocks|length < 2 %}

// 				<div class="timeline__grid timeline__grid--{{ position }}{{ year ? ' timeline__grid--with-year' : null }}{{ image ? ' timeline__grid--image' : null }}">

// 					{% if year %}
// 						<div class="timeline__item-year">
// 							{{ year }}
// 						</div>
// 					{% endif %}

// 					{% if title or text %}
// 						<div class="timeline__content">
// 							{% if title %}
// 								<h3 class="timeline__item-title">
// 									{{ toNbsp(title) }}
// 								</h3>
// 							{% endif %}

// 							{% if text %}
// 								<p class="timeline__item-text">
// 									{{ toNbsp(text) }}
// 								</p>
// 							{% endif %}
// 						</div>
// 					{% endif %}

// 					{% if image %}
// 						<div class="timeline__image" style='{{ image ? "background-image: url(#{image})" : "" }}'></div>
// 					{% endif %}

// 				</div>

// 				{% if onlyOne %}
// 					<div class="timeline__grid timeline__grid--last"></div>
// 				{% endif %}

// 			{% endfor %}

// 		</div>

// 	{% endfor %}

// </div>

import React from "react";

const Timeline = ({ data }) => {
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
						const title = block.title || null;
						const text = block.text || null;
						const year = block.year || null;
						const position =
							blockIdx === 0 ? "first" : blockIdx === 1 ? "last" : null;
						const image = block.image || null;
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
											{title && (
												<h3 className="timeline__item-title">{title}</h3>
											)}
											{text && <p className="timeline__item-text">{text}</p>}
										</div>
									)}
									{image && (
										<div
											className="timeline__image"
											style={{
												backgroundImage: `url(${image})`,
											}}
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
