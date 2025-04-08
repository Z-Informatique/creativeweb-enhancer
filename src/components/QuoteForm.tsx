
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Définir le schéma de validation Zod
const quoteFormSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit comporter au moins 2 caractères" }),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide" }),
  phone: z.string().min(8, { message: "Veuillez entrer un numéro de téléphone valide" }),
  company: z.string().optional(),
  service: z.string().min(1, { message: "Veuillez sélectionner un service" }),
  budget: z.string().optional(),
  message: z.string().min(10, { message: "Votre message doit comporter au moins 10 caractères" }),
});

type QuoteFormValues = z.infer<typeof quoteFormSchema>;

interface QuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const QuoteForm = ({ open, onOpenChange, defaultService = "" }: QuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: defaultService,
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);

    try {
      // Configure EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        from_phone: data.phone,
        company: data.company || "Non spécifié",
        service: data.service,
        budget: data.budget || "Non spécifié",
        message: data.message,
        to_email: "contact@creative-more-africa.com",
      };

      // Remplacer par les identifiants EmailJS réels
      await emailjs.send(
        "service_creativeweb", // Remplacer par votre Service ID
        "template_quote_request", // Remplacer par votre Template ID
        templateParams,
        "ZDQ8dv1qcnP6ZQWDt" // Clé publique - peut être incluse en toute sécurité
      );

      toast.success("Votre demande de devis a été envoyée avec succès. Notre équipe vous contactera bientôt.");
      form.reset();
      onOpenChange(false);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast.error("Une erreur s'est produite lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Demander un devis</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour recevoir un devis personnalisé selon vos besoins.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom complet*</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email*</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Téléphone*</FormLabel>
                    <FormControl>
                      <Input placeholder="+242 04 457 22 05" type="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entreprise</FormLabel>
                    <FormControl>
                      <Input placeholder="Nom de votre entreprise" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service souhaité*</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="" disabled={field.value !== ""}>Sélectionnez un service</option>
                      <option value="Développement Web">Développement Web</option>
                      <option value="Design UI/UX">Design UI/UX</option>
                      <option value="E-commerce">Solutions E-commerce</option>
                      <option value="Applications Web">Applications Web</option>
                      <option value="Applications Mobiles">Applications Mobiles</option>
                      <option value="Formations">Formations digitales</option>
                      <option value="Gestion de données">Gestion de données</option>
                      <option value="Autre">Autre (préciser dans le message)</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget estimé</FormLabel>
                  <FormControl>
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      {...field}
                    >
                      <option value="" disabled={field.value !== ""}>Sélectionnez une fourchette</option>
                      <option value="< 500 000 FCFA">Moins de 500 000 FCFA</option>
                      <option value="500 000 - 1 000 000 FCFA">500 000 - 1 000 000 FCFA</option>
                      <option value="1 000 000 - 3 000 000 FCFA">1 000 000 - 3 000 000 FCFA</option>
                      <option value="3 000 000 - 5 000 000 FCFA">3 000 000 - 5 000 000 FCFA</option>
                      <option value="> 5 000 000 FCFA">Plus de 5 000 000 FCFA</option>
                      <option value="À déterminer">À déterminer</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Détails du projet*</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Décrivez votre projet, vos objectifs et vos attentes..." 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-orange-500 hover:bg-orange-600 text-white" 
                disabled={isSubmitting}
              >
                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteForm;
