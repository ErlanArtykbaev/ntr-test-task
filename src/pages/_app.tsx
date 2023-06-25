import { useMemo, VFC } from 'react';
import { NextPage } from 'next';
import { AppPropsType } from 'next/dist/shared/lib/utils';

import Layout from 'components/Layout';

import { wrapper } from 'store/index';
import 'assets/styles/index.scss';

/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */
const App: NextPage<AppPropsType, Record<string, unknown> | undefined> = props => {
  const { Component: component, pageProps, router: { pathname: propsPathname } } = props;


  const content = useMemo(
    () => {
      const Component = component as VFC;

      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    },
    [propsPathname, component, pageProps]
  );

  return (
    <div>
      {content}
    </div>
  );

};

export default wrapper.withRedux(App);
