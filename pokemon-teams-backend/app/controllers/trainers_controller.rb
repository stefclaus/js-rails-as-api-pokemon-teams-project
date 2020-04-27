class TrainersController < ApplicationController

  def index
    trainers = Trainer.all

    render json: trainers, include: [:pokemons], except: [:updated_at, :created_at]
  end

end
