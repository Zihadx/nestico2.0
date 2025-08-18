import { useFormik } from "formik";
import { useRouter } from "next/navigation";

interface UseAuthFormProps {
  initialValues: any;
  validationSchema: any;
  onSubmit: (values: any, router: ReturnType<typeof useRouter>) => Promise<void>;
}

export const useAuthForm = ({ initialValues, validationSchema, onSubmit }: UseAuthFormProps) => {
  const router = useRouter();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {

      await onSubmit(values, router);
    },
  });

  return formik;
};
