from django.contrib import admin
from .models import  Teacher, CourseCategory, Course, Student,Chapter,StudentCourseEnrollment, CourseRating

# Register your models here.

admin.site.register(Teacher)
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Chapter)
admin.site.register(Student)
admin.site.register(StudentCourseEnrollment)
admin.site.register(CourseRating)

