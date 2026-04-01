import {z} from "zod"

export const taskSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
  date: z.string().nonempty("Date is required"),
  emname: z.string().nonempty("Employee is required"),
  category: z.string().nonempty("Category is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  priority: z.string().nonempty("Priority is required"),
})