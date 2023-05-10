import * as React from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.min.css';
import classnames from 'classnames';

interface LayoutProps {
  header?: React.ReactNode,
  children?: React.ReactNode,
  isHome?: boolean,
  isProject?: boolean,
  layoutClass?: string,
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { header, children, isHome, isProject, layoutClass } = props;

  const scrollContainerRef = React.useRef(null)
  const cursorRef = React.useRef<HTMLDivElement>(null);

  const scrollOption = isHome ?
    {
      smooth: true,
      direction: 'horizontal',
      tablet: { smooth: true },
      smartphone: { smooth: true },
    }
    :
    {smooth: true};

  React.useEffect(() => {
    import(
      /* webpackChunkName: "Cursor" */
      /* webpackMode: "lazy" */
      '../js/Cursor'
    )
      .then(module => {
        const components = module.default(cursorRef.current);
        components.init();
      })
      .catch(error =>
        console.error(
          'An error occurred while loading the component Cursor : ${error}',
          error
        ),
      );
  }, [cursorRef]);

  return (
    <>
      <div className="uam_cursor" ref={cursorRef}><span></span></div>

      <LocomotiveScrollProvider
        options={scrollOption}
        watch={[
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]}
        containerRef={scrollContainerRef}
      >
        <div id="swup" className={classnames(
          'uam_viewport',
          layoutClass,
          {
            'uam_home': isHome,
            'uam_project': isProject,
          }
        )} data-scroll-container ref={scrollContainerRef}>
          {(header && !isHome) && header}

          <div className="uam_viewport_body">
            {children}
          </div>
        </div>
      </LocomotiveScrollProvider>

      <footer className="uam_footer" data-scroll data-scroll-sticky data-scroll-target="#uam-header">
        <div className="uam_wrapper">
          <a href="/about" className="uam_link uam_footer_contact">
            <i className="uam_icon_coffee"></i> <span>Vous avez un projet ? <span className="uam_link-underline">On a du café !</span></span>
          </a>
          <div className="uam_footer_copyright uam_text-tertiary" data-before="UAM" data-after="2022">
            <span>Made with</span> <i className="uam_icon_heart"></i> <span>by unautremonde © 2022</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Layout