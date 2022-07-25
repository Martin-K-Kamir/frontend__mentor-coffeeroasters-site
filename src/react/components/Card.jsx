export default function Card(props) {


	function renderImg(props) {
		if (props.imgType === 'png' || props.imgType === 'jpg') {
			return (<picture className="card__image">
				<source srcSet={`../assets/${props.dir}/${props.img}.webp`} type="image/webp"/>
				<source srcSet={`../assets/${props.dir}/${props.img}.${props.imgType}`}
				        type={`image/${props.imgType}`}/>
				<img src={`../assets/${props.dir}/${props.img}.${props.imgType}`} alt={props.alt}
				     width={props.imgWidth} height={props.imgHeight}/>
			</picture>)
		}
		if (props.imgType === 'svg') {
			return (<img className="card__image" src={`../assets/${props.dir}/${props.img}.${props.imgType}`}
			             alt={props.alt} width={props.imgWidth} height={props.imgHeight}/>)
		}
	}

	return (props.data.map(curItem => (
		<div className={`card ${props.type ? 'card--type-' + props.type : ''} ${props.utils ? props.utils : ''}`}
		     key={curItem.id}>
			<div className={`card__content switcher`}>
				{curItem.img ? renderImg(curItem) : <div className="card__number">{`0${curItem.id}`}</div>}

				<div className={`card__metadata`}>
					<h3 className="card__title ">{curItem.title}</h3>
					{curItem.desc
						?
						<p className="card__description description">{curItem.desc}</p>
						:
						<address className="card__description description">
								{curItem.street}<br/>
								{curItem.city}<br/>
								{curItem.postcode}<br/>
								<a href={`tel:${curItem.phoneNum}`}>{curItem.phoneNum}<br/></a>
						</address>}
				</div>
			</div>
		</div>)));
}