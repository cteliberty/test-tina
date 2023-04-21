const Cursor = ($cursor: HTMLDivElement|null) => {
  const initCursor: any = () => {
    if ($cursor) {
      const $link = document.querySelectorAll('a');
      const $button = document.querySelectorAll('button');
      const $slideNav = document.querySelectorAll('.uam_slide_navigation > *');

      const refreshCursor = () => {
        $cursor.dataset.link = '';
        $cursor.classList.remove('uam_cursor-custom');
        $cursor.classList.remove('uam_cursor-hover');
      };

      const editCursor = (event: MouseEvent) => {
        const { clientX: x, clientY: y } = event;

        $cursor.style = {'left': `${x}px`};
        $cursor.style = {'top': `${y}px`};
      };

      refreshCursor();
      window.addEventListener('mousemove', editCursor);

      $link.forEach(($element: HTMLElement) => {
        $element.addEventListener('mouseover', (event: MouseEvent) => {
          if (event.target) {
            console.log(event.target);
            const linkText = event.target.dataset.dataLink;
            const linkCustom = event.target.dataset.customLink;
  
            if (linkCustom === 'true') {
              $cursor.dataset.link = linkText;
              $cursor.classList.add('uam_cursor-custom');
            }
          }
  
          $cursor.classList.remove('uam_cursor-hover');
        });
  
        $element.addEventListener('mouseout', () => refreshCursor());
      })

      $button.forEach(($element) => {
        $element.addEventListener('mouseover', () => $cursor.classList.add('uam_cursor-hover'));
        $element.addEventListener('mouseout', () => refreshCursor());
      });

      $slideNav.forEach(($element) => {
        $element.addEventListener('mouseover', () => $cursor.classList.add('uam_cursor-hover'));
        $element.addEventListener('mouseout', () => refreshCursor());
      });
    }
  };

  return {
    init: () => {
      initCursor();
    },
    destroy: () => {
      if ($cursor) {
        $cursor.remove();
      }
    },
  };
};

export default Cursor;
