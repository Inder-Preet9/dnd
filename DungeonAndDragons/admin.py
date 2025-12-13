from django.contrib import admin
from .models import Sweet

@admin.register(Sweet)
class SweetAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "quantity", "is_available")
    list_editable = ("price", "quantity", "is_available")
    search_fields = ("name", "category")
    list_filter = ("category", "is_available")
