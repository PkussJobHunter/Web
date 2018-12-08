from ...extensions import cache
from flask import render_template
from . import pages

@pages.route('/calendar', methods=['GET', 'POST'])
# @cache.cached(timeout=90, key_prefix='post')
def calendar():
    return render_template('pages/calendar/calendar.html')
    pass


