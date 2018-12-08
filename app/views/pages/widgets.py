from ...extensions import cache
from flask import render_template
from . import pages


@pages.route('/widgets', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def widgets():
    return render_template('pages/widgets/widgets.html')
    pass