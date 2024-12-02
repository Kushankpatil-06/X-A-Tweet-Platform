import {execute} from "../../services/dummy-service.js"

test("Learning how to do the testing ",()=>{
    const result = execute();
    expect(result).toBe('Learning JS')
})