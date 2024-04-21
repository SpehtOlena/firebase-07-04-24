import { useState, createRef, useRef } from 'react';
import { Button } from 'antd';
import './App.css'
import { Transition, CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group';
import { Link, Outlet, useLocation } from 'react-router-dom';

const App = () => {

	const [show, setShow] = useState(false);

	const [items, setItems] = useState(["Item1", "Item2", "Item3", "Item4"]);
	const [index, setIndex] = useState(0);
	const nextItem = () => {
		setIndex((index + 1) % items.length)
	}
	const nodeRef = useRef(null);

	const location = useLocation()
	const [items1, setItems1] = useState(() => [
		{
			id: 1,
			text: 'Buy eggs',
		},
		{
			id: 2,
			text: 'Pay bills',
		},
		{
			id: 3,
			text: 'Invite friends over',
		},
		{
			id: 4,
			text: 'Fix the TV',
		},
	]);

	return (

		<div className={'App'}>
			<div className={'header'}>
				<Link to={'/home'}>Home</Link>
				<Link to={'/shop'}>Shop</Link>
				<Link to={'/blog'}>Blog</Link>
			</div>

			{/* Transition
			<div>
				<Button type={'primary'} onClick={() => setShow(!show)}>Toggle animation</Button>
				<Transition
					in={show}
					timeout={300}
					mountOnEnter
					unmountOnExit
				>
					{
						state => (
							<div className={`box box${state}`}>
								This animation is a transition!
							</div>
						)
					}
				</Transition>
			</div> */}



			{/* CSSTransition */}
			{/* {
				!show &&
				<Button type={'primary'} onClick={() => setShow(!show)}>Toggle animation</Button>
			} */}
			{/* <CSSTransition
				in={show}
				timeout={300}
				classNames={'fade'}
				mountOnEnter
				unmountOnExit
			>
				<div className={'box'}>
					This is CSSTransition animation!
					<Button danger type={'primary'} onClick={() => setShow(false)}>Close</Button>
				</div>
			</CSSTransition> */}



			{/* Switch Transition
			<Button onClick={nextItem}>Next Item</Button>
			<SwitchTransition mode={'in-out'}>
				<CSSTransition key={items[index]} timeout={300} classNames={'fade'}>
					<div>
						{items[index]}
					</div>
				</CSSTransition>
			</SwitchTransition> */}


			{/* 
			Transition Group
			<TransitionGroup className={'fade'}>
				{
					items1.map(({ id, text }) => (
						<CSSTransition key={id} timeout={300} classNames={'fade'}>
							<div className={'list-item'}>
								{text}
								<Button
									className="remove-btn"
									variant="danger"
									size="sm"
									onClick={() =>
										setItems1((items1) =>
											items1.filter((item) => item.id !== id)
										)
									}
								>
									&times;
								</Button>
							</div>
						</CSSTransition>
					))
				}
			</TransitionGroup>
			<Button
				onClick={() => {
					const text = prompt('Enter some text');
					if (text) {
						setItems1((items1) => [
							...items1,
							{
								id: Date.now(),
								text,
								nodeRef: createRef(null),
							},
						]);
					}
				}}
			>
				Add Item
			</Button> */}



			{/* +React-router-dom */}
			<SwitchTransition>
				<CSSTransition
					key={location.pathname}
					nodeRef={nodeRef}
					timeout={300}
					classNames={'page'}
					unmountOnExit
				>
					<div ref={nodeRef} className="page">
						<Outlet />
					</div>
				</CSSTransition>
			</SwitchTransition>
		</div>
	)
}
export default App
