from pydantic import BaseModel

class SampleInput(BaseModel):
    value: float

class SampleOutput(BaseModel):
    result: float
