from ...extensions import cache
from flask import render_template
from . import pages

@pages.route('/forms/advanced', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def advanced():
    return render_template('pages/forms/advanced.html')
    pass


@pages.route('/forms/editors', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def editors():
    return render_template('pages/forms/editors.html')
    pass


@pages.route('/forms/general', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def general():
    return render_template('pages/forms/general.html')
    pass