var $menuDarkOverlay, $menu, $openMenu;

function showMenu() {
    $menuDarkOverlay.show().animate({
        opacity: 0.5
    }, 500);

    $menu.animate({
        left: 0
    }, 500);

    $menuDarkOverlay.one('click', hideMenu);
}

function shake($e) {
    $e.css('transform', 'rotate(5deg)');
    setTimeout(function () {
        $e.css('transform', 'rotate(-5deg)');
        setTimeout(function () {
            $e.css('transform', 'rotate(5deg)');
            setTimeout(function () {
                $e.css('transform', 'rotate(-5deg)');
                setTimeout(function () {
                    $e.css('transform', 'rotate(0deg)');
                }, 50);
            }, 50);
        }, 50);
    }, 50);
}

function hideMenu() {
    $menuDarkOverlay.animate({
        opacity: 0
    }, 500, function () {
        $menuDarkOverlay.hide();
    });

    $menu.animate({
        left: '-80%'
    }, 500);
}

$(document).ready(function () {
    $menuDarkOverlay = $('#menu-dark-overlay');
    $menu = $('#menu');
    $openMenu = $('#open-menu');

    if ($openMenu) {
        $openMenu.on('click', showMenu);
    }
});
