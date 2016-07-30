import { h, Component, render } from 'preact';
import CSSTransitionGroup from 'src';
import { endEvents } from 'src/TransitionEvents';
import './style.css';

/* global describe,expect,it */

class Todo extends Component {
	defaultProps = {
		end: ()=>{}
	};

	componentWillUnmount() {
		if (this.props.end) this.props.end();
	}

	render({ onClick, children }) {
		return <div onClick={onClick} class="item">{children}</div>;
	}
}

class TodoList extends Component {
	state = {
		items: ['hello', 'world', 'click', 'me']
	};

	handleAdd(item) {
		let { items } = this.state;
		items = items.concat(item);
		this.setState({ items });
	}

	handleRemove(i) {
		let { items } = this.state;
		items.splice(i, 1);
		this.setState({ items });
	}

	render(_, { items }) {
		return (
			<div>
				<CSSTransitionGroup transitionName="example">
					{ items.map( (item, i) => (
						<Todo key={item} onClick={this.handleRemove.bind(this, i)}>
							{item}
						</Todo>
					)) }
				</CSSTransitionGroup>
			</div>
		);
	}
}


const Nothing = () => null;


describe('CSSTransitionGroup', () => {
	let container = document.createElement('div'),
		list, root;
	document.body.appendChild(container);

	let $ = s => [].slice.call(container.querySelectorAll(s));

	beforeEach( () => {
		root = render(<div><Nothing /></div>, container, root);
		root = render(<div><TodoList ref={c => list=c} /></div>, container, root);
	});

	afterEach( () => {
		list = null;
	});

	it('create works', () => {
		expect($('.item')).to.have.length(4);
	});

	it('transitionLeave works', done => {
		// this.timeout(5999);
		list.handleRemove(0);

		// make sure -leave class was added
		setTimeout( () => {
			expect($('.item')).to.have.length(4);

			expect($('.item')[0].className).to.contain('example-leave');
			expect($('.item')[0].className).to.contain('example-leave-active');
		}, 100);

		// then make sure it's gone
		setTimeout( () => {
			expect($('.item')).to.have.length(3);
			done();
		}, 1400);
	});

	it('transitionEnter works', done => {
		// this.timeout(5999);
		list.handleAdd(Date.now());

		setTimeout( () => {
			expect($('.item')).to.have.length(4);

			expect($('.item')[3].className).to.contain('example-enter');
			expect($('.item')[3].className).to.contain('example-enter-active');
		}, 500);

		setTimeout( () => {
			expect($('.item')).to.have.length(4);

			expect($('.item')[3].className).not.to.contain('example-enter');
			expect($('.item')[3].className).not.to.contain('example-enter-active');

			done();
		}, 1400);
	});
});
