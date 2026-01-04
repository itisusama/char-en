import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema, type CategorySchema } from "@/lib/zod-schema";
import { ui } from "@/imports/ui";
import { useState } from "react";

export default function AddCategory() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<CategorySchema>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: CategorySchema) {
    //   try {
    //     setLoading(true);
    // const success = await loginUser(values);
    console.log(values);
    //     if (success) {
    //       form.reset();
    //     }
    //   } finally {
    //     setLoading(false);
    //   }
  }

  return (
    <>
      <ui.Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate>
          <ui.FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <ui.FormItem>
                <ui.FormLabel>Name</ui.FormLabel>
                <ui.FormControl>
                  <ui.Input placeholder="Add Category" {...field} />
                </ui.FormControl>
                <ui.FormMessage />
              </ui.FormItem>
            )}
          />
          <ui.Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Adding..." : "Add Category"}
          </ui.Button>
        </form>
      </ui.Form>
    </>
  );
}
