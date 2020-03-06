import { CodeBlock } from '@lunit/mdx-code-block';
import React, { ComponentType, createElement, CSSProperties } from 'react';
import Frame from 'react-frame-component';
import { useHandbook } from '../context/handbook';

interface SampleProps {
  path: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: CSSProperties;
  components?: { component: { default: ComponentType }; source: { default: string } };
}

const DefaultSampleWrapper = ({ children }) => children;

export function Sample({ components, className, style, width = '100%', height = 300 }: SampleProps) {
  if (!components) {
    throw new Error(`you have to install @handbook/babel-plugin`);
  }

  const { sampleTemplate, sampleWrapper = DefaultSampleWrapper } = useHandbook();

  return (
    <div className={className} style={style}>
      <Frame initialContent={sampleTemplate} width={width} height={height}>
        {createElement(sampleWrapper, {
          children: createElement(components?.component.default),
        })}
      </Frame>
      <CodeBlock children={components?.source.default} language="tsx"/>
    </div>
  );
}
