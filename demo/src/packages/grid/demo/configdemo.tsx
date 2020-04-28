import React, { ChangeEvent } from 'react';

import { Row, Col } from '../index';
import { number } from 'prop-types';

export const Config = {
  code: `
    class Basedemo extends React.PureComponent {
      render():React.ReactElement {
        return (
          
        );
      }
    }
    
    export default Basedemo;
  `,
  title: '栅格配置器',
  description: '可以简单配置几种等分栅格和间距。',
};

interface IState {
  horizontalGutter: number;
  verticalGutter: number;
  columnCount: number;
  columnCountStep: number;
}

const columnCountStepMap: Map<number, number> = new Map<number, number>([
  [2, 1],
  [3, 1],
  [4, 2],
  [6, 2],
  [8, 4],
]);

/**
 * BaseDemo
 * @class BaseDemo;
 * @classdesc BaseDemo
 */
class Basedemo extends React.PureComponent<any, IState> {
  state: IState = {
    horizontalGutter: 8,
    verticalGutter: 8,
    columnCount: 2,
    columnCountStep: 1,
  };

  renderRow(): JSX.Element | null {
    const { horizontalGutter, verticalGutter, columnCount } = this.state;

    const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };

    const Cols1: JSX.Element[] = [];
    const Cols2: JSX.Element[] = [];
    for (let i = 0; i < columnCount; i++) {
      Cols1.push(
        <Col key={i} span={24 / columnCount}>
          <div style={style}>Column</div>
        </Col>,
      );

      Cols2.push(
        <Col key={i} span={24 / columnCount}>
          <div style={style}>Column</div>
        </Col>,
      );
    }

    return (
      <>
        <Row gutter={[horizontalGutter, verticalGutter]}>{Cols1}</Row>
        <Row gutter={[horizontalGutter, verticalGutter]}>{Cols2}</Row>
      </>
    );
  }

  onHorizontalGutterChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    this.setState({
      horizontalGutter: Number(e.target.value),
    });
  };

  onVerticalGutterChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    this.setState({
      verticalGutter: Number(e.target.value),
    });
  };

  onColumnCountChange: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const columnCount: number = Number(e.target.value);
    const columnCountStep: number = columnCountStepMap.get(columnCount) as number;
    this.setState({
      columnCount,
      columnCountStep,
    });
  };

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const { horizontalGutter, verticalGutter, columnCount, columnCountStep } = this.state;

    const style: React.CSSProperties = {
      width: '100%',
    };

    return (
      <div>
        <div>
          <fieldset>
            <legend>Horizontal Gutter (px):</legend>
            <div>
              <input
                style={style}
                type="range"
                min={8}
                max={48}
                step={8}
                value={horizontalGutter}
                onChange={this.onHorizontalGutterChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Vertical Gutter (px):</legend>
            <div>
              <input
                style={style}
                type="range"
                min={8}
                max={48}
                step={8}
                value={verticalGutter}
                onChange={this.onVerticalGutterChange}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Column Count:</legend>
            <div>
              <input
                style={style}
                type="range"
                min={2}
                max={12}
                step={columnCountStep}
                value={columnCount}
                onChange={this.onColumnCountChange}
              />
            </div>
          </fieldset>
        </div>

        <div>{this.renderRow()}</div>

        <div>
          <pre>
            <code></code>
          </pre>
        </div>
      </div>
    );
  }
}

export default Basedemo;
