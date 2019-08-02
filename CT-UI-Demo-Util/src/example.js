import React from 'react';
import PropTypes from 'prop-types';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenCode: false,
    };
  }

  render() {
    const { children, title, introduction } = this.props;
    return (
      <div className="CT-UI-Example">
        <div className="CT-UI-Example-Component">{children[0]}</div>
        <fieldset className="CT-UI-Example-Fieldset">
          <legend>{title}</legend>
          <div dangerouslySetInnerHTML={{ __html: introduction }} />
        </fieldset>
        <div className={`CT-UI-Example-footer ${this.state.isOpenCode ? 'open' : ''}`}>
          &nbsp;
          <span
            className={`iconfont ${this.state.isOpenCode ? 'iconcode' : 'iconcode1'}`}
            onClick={() => {
            this.setState({
              isOpenCode: !this.state.isOpenCode,
            });
          }}
          />
        </div>
        <div className={`CT-UI-Example-Code ${this.state.isOpenCode ? 'open' : ''}`}>{children[1]}</div>
      </div>
    );
  }
}

Example.propTypes = {
  children: PropTypes.array,
  // 标题
  title: PropTypes.string,
  // 介绍(html)
  introduction: PropTypes.string,
};

export default Example;
