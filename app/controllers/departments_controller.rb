class DepartmentsController < ApplicationController
    before_action :set_department, only: [:show, :update, :edit, :destroy]

    def index
        @departments = Department.all
        render component: "Departments", props: {departments: @departments}
    end

    def show
        render component: "Department", props: {department: @department}
    end



    def create
        @department = Department.new(department_params)
        if(@department.save)
            redirect_to root_path
        else
        end
    end

    def edit
        render component: "DepartmentEdit", props:{department: @department}
    end

    def update
        if @department.update(department_params)
            redirect_to root_path
        else
        end
    end

    def new
        render component: "DepartmentNew"
    end


    def destroy
        @department.destroy
        redirect_to root_path
    end

    private

    def set_department
        @department = Department.find(params[:id])
    end

    def department_params
        params.require(:department).permit(:name)
    end


end
