from django.contrib import admin
from .models import Post, Comment
from django_summernote.admin import SummernoteModelAdmin

# Register your models here.


@admin.register(Post)
class PostAdmin(SummernoteModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ['title', 'slug', 'created_on']
    search_fields = ['content', 'title']
    summernote_fields = ('content')


admin.site.register(Comment)