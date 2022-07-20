import { Request, Response } from "express";

import CreateCourseService from "../server/CreateCourseService";

export function createCourse(request: Request, response: Response){
    CreateCourseService.execute('Node JS', 10, "Leandro");

    return response.send()
}