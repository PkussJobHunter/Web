from ...extensions import cache
from flask import render_template
from . import pages


@pages.route('/mailbox/compose', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def compose():
    return render_template('pages/mailbox/compose.html')
    pass


@pages.route('/mailbox', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def mailbox():
    return render_template('pages/mailbox/mailbox.html')
    pass


@pages.route('/mailbox/read', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def read():
    return render_template('pages/mailbox/read.html')
    pass