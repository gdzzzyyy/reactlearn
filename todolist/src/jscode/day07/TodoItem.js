import React  from "react";
//導入proptypes　React自分で含まれる  
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        console.log('child render');
        const { content, test } = this.props;
        return (
            <div 
                onClick={this.handleClick}>
                    { test } - { content }
            </div>
        )
    }


    componentWillUnmount() {
        //console.log('child  componentWillUnmount')
    }


    handleClick() {
        const {deleteItem, index} = this.props
        deleteItem(index)
        //this.props.deleteItem(this.props.index)
    }
}


/*
*   送信パケットにAデータが含まれていない場合、AはPropTypesの検査対象以外ことです
*   上述場合は、isRequired必要がある。
*/
TodoItem.propTypes = {
    test: PropTypes.string.isRequired,  
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    deleteItem: PropTypes.func,
    index: PropTypes.number
}

/**
 * defaultProps :当初はdefaultPropsの型をPartial<Props>とすることで部分的なProps型を指定してあげれば、解決すると思ってました
 */
TodoItem.defaultProps = {
    test: 'hello world'
}

export default TodoItem;