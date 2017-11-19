from django.db import models
from django.utils.translation import gettext as _

class Employee(models.Model):
    GENDERS = (
        ('male', 'Male'),
        ('female', 'Female')
    )
    first_name = models.CharField(
            verbose_name=_('First name'),
            max_length=100,
            help_text=_('First name'))
    last_name = models.CharField(
            verbose_name=_('Last name'),
            max_length=100,
            help_text=_('Last name'))
    email_address = models.CharField(
            verbose_name=_('Email Address'),
            max_length=100,
            help_text=_('Email Address'))
    gender = models.CharField(
            verbose_name=_('Gender'),
            choices = GENDERS,
            default='male',
            max_length=10,
            help_text=_('Gender: Male or Female'))
    salary = models.IntegerField()
    designation = models.CharField(
            verbose_name=_('Designation'),
            max_length=100,
            help_text=_('Designation'))
#     profile = models.ImageField('profile', upload_to='profile')

    created_at = models.DateTimeField(verbose_name=_('Created At'),
        auto_now_add=True, help_text=_("Date when employee created."))
    updated_at = models.DateTimeField(verbose_name=_('Updated At'),
        auto_now=True, help_text=_("Date when employee updated."))

    class Meta:
        verbose_name = 'Employee'
        verbose_name_plural = 'Employees'
