import Cover from '../components/Cover';
import img from '../../assets/plan/plan-cover.jpg';
import Steps from "../components/Steps";
import data from "../../data";
import Card from "../components/Card";
import Accordion from "../components/Accordion";

export default function Plan() {
	return (<>
		<Cover coverImg={img} title="Create plan"
		       desc="Coffee the way you wanted it to be. For coffee delivered tomorrow, or next week. For whatever brew method you use. For choice, for convenience, for quality."/>
		<section className="section--steps">
			<div className="container container--aligned surface-secondary radius-3">
				<div className="block-space space-fluid-4">
					<div className="stack space-8">
						<div className="inline-center--tablet"><h2 className="title-4 text-neutral-1">How it works</h2>
						</div>

						<Steps length={data.steps}/>

						<div className="switcher space-5 measure-6 text-neutral-1">
							{<Card data={data.steps} type="3"/>}
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="section--subscription">
			<div className="container">
				<div className="sidebar space-fluid-4">
					<ul className="tabs font-serif f-size-4 f-weight-3">
						<li className="tabs__item" data-active="false"><a href="#Preferences">Preferences</a></li>
						<li className="tabs__item" data-active="false"><a href="index.html">Bean Type</a></li>
						<li className="tabs__item" data-active="false"><a href="index.html">Quantity</a></li>
						<li className="tabs__item" data-active="false"><a href="index.html">Grind Option</a></li>
						<li className="tabs__item" data-active="false"><a href="index.html">Deliveries</a></li>
					</ul>

					<Accordion/>
				</div>
			</div>
		</section>
	</>);
}

