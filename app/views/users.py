import os

from flask import Blueprint, render_template

users = Blueprint('users', __name__)


# 用户登录
@users.route('/login/', methods=['GET', 'POST'])
def login():
    return render_template('users/login.html')
