from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import permissions
from rest_framework.parsers import JSONParser
from . serializers import TeacherSerializer
from . serializers import CategorySerializer
from . serializers import CourseSerializer
from . serializers import ChapterSerializer
from . serializers import StudentSerializer,CourseRatinglSerializer
from . serializers import StudentCourseEnrollSerializer
from django.core.exceptions import ObjectDoesNotExist

from . import models

# Create your views here.

class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    #permission_classes = [permissions.IsAuthenticated]



class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
   # permission_classes = [permissions.IsAuthenticated]

from django.http import JsonResponse




@csrf_exempt
def teacher_login(request):
    try:
        email = request.POST['email']
        password = request.POST['password']
        teacherData = models.Teacher.objects.get(email=email, password=password)
        return JsonResponse({'bool': True,'teacher_id':teacherData.id})
    except KeyError:
        return JsonResponse({'error': 'Email or password missing in request'}, status=400)
    except ObjectDoesNotExist:
        return JsonResponse({'bool': False})
    

#category
class CategoryList(generics.ListCreateAPIView):
    queryset = models.CourseCategory.objects.all()
    serializer_class = CategorySerializer

#Course
class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer

    def get_queryset(self):
        qs=super().get_queryset()
        if 'result' in self.request.GET:
            limit = int(self.request.GET['result'])
            qs=models.Course.objects.all().order_by('-id')[:limit]
        return qs   
    
#Course DEtail view
class CourseDetailView(generics.RetrieveAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer



#Chapter List
class ChapterList(generics.ListCreateAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class = ChapterSerializer

    
     
#Specific Teacher Course
class TeacherCourseList(generics.ListAPIView):
    serializer_class = CourseSerializer
    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=models.Teacher.objects.get(pk=teacher_id)
        return models.Course.objects.filter(teacher=teacher)
    
#Specific Teacher Course
class TeacherCourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = CourseSerializer
    
    

#Specific Course Chapter List
class CourseChapterList(generics.ListAPIView):
    serializer_class = ChapterSerializer
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=models.Course.objects.get(pk=course_id)
        return models.Chapter.objects.filter(course=course)
    
class ChapterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Chapter.objects.all()
    serializer_class = ChapterSerializer    

#student data
class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
    #permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def student_login(request):
    try:
        email = request.POST['email']
        password = request.POST['password']
        studentData = models.Student.objects.get(email=email, password=password)
        return JsonResponse({'bool': True,'student_id':studentData.id})
    except KeyError:
        return JsonResponse({'error': 'Email or password missing in request'}, status=400)
    except ObjectDoesNotExist:
        return JsonResponse({'bool': False})
    

class StudentEnrollCourseList(generics.ListCreateAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    #permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def fetch_enroll_status(request,student_id,course_id):
    course = models.Course.objects.filter(id=course_id).first()
    student = models.Student.objects.filter(id=student_id).first()
    enrollStatus = models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if enrollStatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({"'bool" : False})


@csrf_exempt
def fetch_enroll_status(request,student_id,course_id):
    course = models.Course.objects.filter(id=course_id).first()
    student = models.Student.objects.filter(id=student_id).first()
    enrollStatus = models.StudentCourseEnrollment.objects.filter(course=course,student=student).count()
    if enrollStatus:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({"'bool" : False})

    
class EnrolledStudentList(generics.ListAPIView):
    queryset = models.StudentCourseEnrollment.objects.all()
    serializer_class = StudentCourseEnrollSerializer
    #permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=models.Course.objects.get(pk=course_id)
        return models.StudentCourseEnrollment.objects.filter(course=course)
    

class CourseRatingList(generics.ListCreateAPIView):
    serializer_class = CourseRatinglSerializer

    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=models.Course.objects.get(pk=course_id)
        return models.CourseRating.objects.filter(course=course)