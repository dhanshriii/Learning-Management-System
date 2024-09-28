from rest_framework import serializers
from . import models

#Teacher
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Teacher
        fields = ['id','full_name','detail','email','password','qualification','mobile_no','skills','teacher_courses']
    def __init__(self, *args, **kargs):
        super(TeacherSerializer,self).__init__(*args,**kargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1


#CourseCategory
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseCategory
        fields = ['id','title','description']


#course
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id','category','teacher','title','description','featured_img','techs','course_chapters','related_vedios','total_enrolled_students']
    def __init__(self, *args, **kargs):
        super(CourseSerializer,self).__init__(*args,**kargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1


#Chapter
class ChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Chapter
        fields = ['id','course','title','description','vedio','remarks']

#student
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields = ['id','full_name','email','username','password','interested_categories']

#CourseCategory
class StudentCourseEnrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.StudentCourseEnrollment
        fields = ['id','course','student','enrolled_time']
    def __init__(self, *args, **kargs):
        super(StudentCourseEnrollSerializer,self).__init__(*args,**kargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1

#CourseRating
class CourseRatinglSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CourseRating
        fields = ['id','course','student','rating','reviews','review_time']
    def __init__(self, *args, **kargs):
        super(CourseRatinglSerializer,self).__init__(*args,**kargs)
        request = self.context.get('request')
        self.Meta.depth = 0
        if request and request.method == 'GET':
            self.Meta.depth = 1