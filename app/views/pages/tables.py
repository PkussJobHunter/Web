from ...extensions import cache
from flask import render_template
from . import pages


@pages.route('/tables/data', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def data():
    return render_template('pages/tables/data.html')
    pass


@pages.route('/tables/simple', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def simple():
    return render_template('pages/tables/simple.html')
    pass