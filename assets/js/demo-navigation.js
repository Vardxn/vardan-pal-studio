/**
 * Shared Demo Navigation Controller (Phase 16C)
 * Handles "Back to Portfolio" behavior:
 * Case A: Visitor came from Studio homepage -> uses history.back() restoring previous scroll position.
 * Case B: Visitor opened demo directly -> falls back naturally to /#work on the homepage.
 */
(function() {
  function initDemoNavigation() {
    const backBtn = document.querySelector('[data-demo-back]');
    if (!backBtn) return;

    backBtn.addEventListener('click', function(e) {
      try {
        const rawState = sessionStorage.getItem('vps_demo_return_state');
        const hasReturnState = !!rawState;
        const sameOriginReferrer = !!(document.referrer && document.referrer.startsWith(window.location.origin));

        if (hasReturnState || sameOriginReferrer) {
          e.preventDefault();
          window.history.back();
          return;
        }
      } catch (err) {
        // Storage access error (e.g. sandbox/private mode): allow default link navigation
      }
      // If direct entry or external origin, normal link href takes over (e.g. /#work)
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemoNavigation);
  } else {
    initDemoNavigation();
  }
})();
