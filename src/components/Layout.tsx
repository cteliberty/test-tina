import * as React from 'react'

// import Cursor from '../js/Cursor';
// const Cursor = require('../js/Cursor')

interface LayoutProps {
  header?: React.ReactNode,
  children?: React.ReactNode,
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { header, children } = props;

  // const cursorRef = React.useRef<HTMLDivElement>(null);

  // React.useEffect(() => {
  //   console.log('Cursor', Cursor);
  //     // throw new Error("my error message");
  //     // break foo;
  //     // const cursor = new (Cursor as any)(cursorRef.current);
  //     // cursor.init();
  // }, [cursorRef]);

  return (
    <>
      {/* <div className="uam_cursor" ref={cursorRef}><span></span></div> */}

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