from ...extensions import cache
from flask import render_template
from . import pages


@pages.route('/ui/buttons', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def buttons():
    return render_template('pages/UI/buttons.html')
    pass


@pages.route('/ui/general', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def ui_general():
    return render_template('pages/UI/general.html')
    pass


@pages.route('/ui/icons', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def icons():
    return render_template('pages/UI/icons.html')
    pass


@pages.route('/ui/modals', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def modals():
    return render_template('pages/UI/modals.html')
    pass


@pages.route('/ui/sliders', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def sliders():
    return render_template('pages/UI/sliders.html')
    pass


@pages.route('/ui/timeline', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def timeline():
    return render_template('pages/UI/timeline.html')
    pass