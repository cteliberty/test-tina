import * as React from 'react'

interface LayoutProps {
  header?: React.ReactNode,
  children?: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { header, children } = props;

  const cursorRef = React.useRef<HTMLDivElement>(null);

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

      <div id="swup" className="uam_viewport uam_home" data-scroll-container>
        {header && header}

        <div className="uam_viewport_body">
          {children}
        </div>
      </div>

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