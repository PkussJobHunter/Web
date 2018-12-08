from ...extensions import cache
from flask import render_template
from . import pages

@pages.route('/layout/boxed', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def boxed():
    return render_template('pages/layout/boxed.html')
    pass

@pages.route('/layout/sidebar', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def sidebar():
    return render_template('pages/layout/collapsed-sidebar.html')
    pass

@pages.route('/layout/fixed', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def fixed():
    return render_template('pages/layout/fixed.html')
    pass

@pages.route('/layout/nav', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def nav():
    return render_template('pages/layout/top-nav.html')
    pass