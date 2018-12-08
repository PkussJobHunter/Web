from ...extensions import cache
from flask import render_template
from . import pages


@pages.route('/examples/404', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def example404():
    return render_template('pages/examples/404.html')
    pass


@pages.route('/examples/500', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def example500():
    return render_template('pages/examples/404.html')
    pass


@pages.route('/examples/blank', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def blank():
    return render_template('pages/examples/blank.html')
    pass


@pages.route('/examples/invoice', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def invoice():
    return render_template('pages/examples/invoice.html')
    pass


@pages.route('/examples/print', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def print():
    return render_template('pages/examples/invoice-print.html')
    pass


@pages.route('/examples/lockscreen', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def lockscreen():
    return render_template('pages/examples/lockscreen.html')
    pass


@pages.route('/examples/login', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def login():
    return render_template('pages/examples/login.html')
    pass


@pages.route('/examples/pace', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def pace():
    return render_template('pages/examples/pace.html')
    pass


@pages.route('/examples/profile', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def profile():
    return render_template('pages/examples/profile.html')
    pass


@pages.route('/examples/register', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def register():
    return render_template('pages/examples/register.html')
    pass