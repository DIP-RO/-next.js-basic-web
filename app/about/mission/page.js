
import Button from "@/app/components/Button"
import dip from "@/public/images/ddd.jpeg"
import Image from "next/image"
export default function Mission() {
    return (
        <main>
             <div>Mission</div>
            <div>
                loremsdhfsjdbjfsbfjsfsbjafsdjsasgjssfjsfjsfjfjsfgjsfjsfsjdgjsdjsjsgfdjsgfjsgdfjdfgsjdfh
                loremsdhfsjdbjfsbfjsfsbjafsdjsasgjssfjsfjsfjfjsfgjsfjsfsjdgjsdjsjsgfdjsgfjsgdfjdfgsjdfh
            </div>
            <Image placeholder="blur" src={dip} alt="dip" quality={100}/>
            <Button/>
      </main>
     
  )
}
