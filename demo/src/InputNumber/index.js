import React, {Component} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './index.scss'

class InputNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            innerValue: '',
            inputErr: false,
            rule: /^(\-|\+)?\d+(\.\d+)?$/,
            message: "只允许输入数字"
        }
    }
    static propTypes = {
        value: PropTypes.string,
        size: PropTypes.string,
        onChange: PropTypes.func,
        max: PropTypes.number,
        min: PropTypes.number
    }
    static defaultProps = {
        size: 'middle',
        onChange: ()=>{},
        max: Infinity,
        min: -Infinity
    }
    get isControl(){
        return 'value' in this.props;
    }
    get value(){
        return this.isControl ? this.props.value : this.state.innerValue;
    }
    render(){
        const {
            size,
            onChange,
            message,
            max,
            min,
            ...rest
        }=this.props;
        let cls = classNames({
            input: true,
            ['input-err']: this.state.inputErr,
            [`size-${size}`]: true
        })
        console.log(this.value)
        console.log(this.state.rule.test(this.value))
        return (
            <div className='input-container'>
                <input className={cls}
                       value={this.value}
                       onChange={(e)=>{
                           if(!this.isControl){
                               this.setState({
                                   innerValue: e.target.value
                               })
                           }
                           this.props.onChange(e.target.value);
                           if (e.target.value>max || e.target.value<min){
                               this.setState({
                                   inputErr: true
                               })
                           }else {
                               this.setState({
                                   inputErr: false
                               })
                           }
                       }}
                       max={max}
                       min={min}
                />
                <p className='input-tip'>{this.value&&!this.state.rule.test(this.value)
                && this.state.message}</p>
            </div>
        )
    }

    componentDidMount(){
        this.setState({
            innerValue: this.props.defaultValue
        })
    }
}

export default InputNumber