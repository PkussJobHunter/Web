from ...extensions import cache
from flask import render_template
from . import pages


@pages.route('/charts/chartjs', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def chartjs():
    return render_template('pages/charts/chartjs.html')
    pass


@pages.route('/charts/flot', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def flot():
    return render_template('pages/charts/flot.html')
    pass


@pages.route('/charts/inline', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def inline():
    return render_template('pages/charts/inline.html')
    pass


@pages.route('/charts/morris', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def morris():
    return render_template('pages/charts/morris.html')
    pass