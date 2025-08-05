import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SingInForm from "./components/sing-in-form";
import SingUpForm from "./components/sing-up-form";

const Authentication = async () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <SingInForm />
        </TabsContent>
        <TabsContent value="sign-up">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default Authentication;
