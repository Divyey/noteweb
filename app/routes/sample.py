from fastapi import APIRouter
from app.schemas.sample_schema import SampleInput, SampleOutput

router = APIRouter(prefix="/admin", tags=["Admin"])

@router.api_route("/predict", methods=["POST", "OPTIONS"], response_model=SampleOutput)
def predict_sample(data: SampleInput):
    result = data.value * 2
    return SampleOutput(result=result)
