import React, {useState} from "react";

export default function Accordion(props) {
	const [isOpen, setIsOpen] = useState({preferences: true});
	const [isChecked, setIsChecked] = useState({});

	function handleOpening(id, e) {
		e.preventDefault();

		setIsOpen({...isOpen, [id]: !isOpen[id]});
	}

	function handleChecking(curGroup, i) {
		setIsOpen({...isOpen, [curGroup.item[i].ref]: true});
		setIsChecked({...isChecked, [curGroup.key]: curGroup.item[i].key});
	}

	function renderCards(curGroup) {
		return (curGroup.item.map((curItem, i) => (
			<li key={curItem.key} onClick={() => handleChecking(curGroup, i)}>
				<a className="card space-3" href={`#${curItem.ref}`}
				   data-checked={isChecked[curGroup.key] === curItem.key}>
					<h3 className="title-4 f-weight-3">{curItem.title}</h3>
					<p className="description space-1">{curItem.desc}</p>
					<span className="sr-only">Check the option and move to the next section</span>
				</a>
			</li>
		)))
	}

	return (
		<form action="#" className="accordion stack space-7">
			{props.data.map(curGroup => (
				<div className="accordion__item" id={curGroup.id} key={curGroup.key}>
					<h2 className="accordion__header title-2 text-neutral-4">
						<button onClick={e => handleOpening(curGroup.id, e)}>{curGroup.title}</button>
						<svg data-open={isOpen[curGroup.id]} width="24" height="24" aria-hidden={true}
						     viewBox="0 0 19 11">
							<use href="assets/sprites.svg#arrow"/>
						</svg>
					</h2>
					<ul className="accordion__body switcher measure-6 space-2" data-open={isOpen[curGroup.id] ?? false}>
						{renderCards(curGroup)}
					</ul>
				</div>
			))}
		</form>
	);
}