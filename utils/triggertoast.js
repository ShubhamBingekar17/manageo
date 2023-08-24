import { useToast } from "native-base";


export const triggertoast = () => {
    
    const toast = useToast();

        
        toast.show({
            avoidKeyboard: true,
            render: () => (
                <ToastMessage
            message={"Password and confrim password do not match"}
            type={"error"}
          />
        ),
      });
}