import React from 'react';
// https://reactjs.org/docs/hooks-faq.html#how-to-test-components-that-use-hooks
import {act} from 'react-dom/test-utils';
import sinon from 'sinon';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';
import OverrideContext from './useClickOutside.context';
import {useClickOutside, ClickOutside, ClickOutsideOverride} from './useClickOutside';

const Elem = () => {
    let test = 1234;
    const ref = sinon.spy();
    useClickOutside(ref, () => test = 4321);
    return <div>{test}</div>;
};

describe('useClickOutside()', () => {
    it('Should add an event listener to the document', () => {
        document.addEventListener = sinon.spy();
        document.removeEventListener = sinon.spy();

        let elem;
        act(() => {
            elem = mount(<Elem/>);
        });
        expect(elem.text()).to.eql('1234');
        expect(document.addEventListener.calledTwice).to.eql(true);
        expect(document.addEventListener.calledWith('mousedown')).to.eql(true);
        expect(document.addEventListener.calledWith('mouseup')).to.eql(true);
        elem.unmount();
        expect(document.removeEventListener.calledWith('mousedown')).to.eql(true);
        expect(document.removeEventListener.calledWith('mouseup')).to.eql(true);
    });

    it('<ClickOutside/>', () => {
        const wrapper = shallow(<ClickOutside><div/></ClickOutside>);
        expect(() => shallow(<ClickOutside/>)).to.throw();
        expect(wrapper.find('div').prop('onMouseDownCapture')).to.be.a('function');
    });

    it('<ClickOutsideOverride/>', () => {
        const wrapper = shallow(<ClickOutsideOverride/>);
        expect(wrapper.find(OverrideContext.Provider)).to.have.length(1);
    });
});
