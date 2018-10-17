class PrototypesController < ApplicationController
  before_action :set_prototype, only: [:show, :edit, :update, :destroy]

  def index
    @prototypes = Prototype.includes(:user).page(params[:page]).per(5).order("created_at DESC")
  end

  def new
    @prototype = Prototype.new
    @prototype.captured_images.build
  end

  def create
    @prototype = Prototype.new(prototype_params)
    if @prototype.save
      redirect_to :root, notice: '投稿が完了しました'
    else
      redirect_to action: :new , alert: '投稿に失敗しました'
    end
  end

  def show
    @prototype = Prototype.find(params[:id])
    @comments = @prototype.comments.includes(:user)
  end

  def destroy
    if @prototype.user_id == current_user.id
      @prototype.destroy
      redirect_to :root, notice: '削除しました'
    end
  end

  def edit
  end

  def update
    if @prototype.user_id == current_user.id
      @prototype.update(prototype_params)
      redirect_to :root, alert: '更新しました'
    end
  end

  private

  def set_prototype
    @prototype = Prototype.find(params[:id])
  end

  def prototype_params
    params.require(:prototype).permit(
      :title,
      :catch_copy,
      :concept,
      :user_id,
      captured_images_attributes: [:content, :status]
    )
  end
end
